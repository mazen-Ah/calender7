import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { GetMonth } from "@/app/calendar/util/GetMonth";

export interface CounterState {
  month: Dayjs[];
  view: string;
  ViewEventModal: boolean;
  ViewEventDetailsModal: boolean;
  CurrentYear: number;
  CurrentMonth: number;
  CurrentDay: number;
  DAy?: any;
  events: {
    date: string;
    description: string;
    id: string;
    fromTime: string;
    title: string;
    toTime: string;
  }[];
}

const initialState: CounterState = {
  month: GetMonth(),
  view: "month",
  ViewEventDetailsModal: false,
  ViewEventModal: false,
  CurrentYear: dayjs().year(),
  CurrentMonth: dayjs().month(),
  CurrentDay: dayjs().date(),
  events: [
    {
      date: "2023-09-23",
      description: "Technical-Interview",
      id: "3a17ed97-73f8-4f97-841d-6f3f8b5f2db6",
      fromTime: "15:00",
      title: "Technical-Interview",
      toTime: "16:00",
    },
  ],
};

export const calenderSlice = createSlice({
  name: "calender",
  initialState,
  reducers: {
    addEv: (
      state,
      action: PayloadAction<{
        date: string;
        description: string;
        id: string;
        fromTime: string;
        title: string;
        toTime: string;
      }>
    ) => {
      state.events.push(action.payload);
    },
    delEv: (state, action: PayloadAction<string>) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
    updateEvent: (state, action) => {
      const { id, updatedEvent } = action.payload;

      state.events = state.events.map((event) => {
        if (event.id === id) {
          return {
            ...event,
            ...action.payload,
          };
        }
        return event;
      });
    },
    PrevDay: (state) => {
      state.CurrentDay -= 1;
    },
    setDay: (state, action) => {
      state.CurrentDay = action.payload;
    },
    NextDay: (state) => {
      state.CurrentDay += 1;
    },
    PrevMonth: (state) => {
      if (state.CurrentMonth === 0) {
        state.CurrentYear -= 1;
        state.CurrentMonth = 11; // December (0-based index)
      } else {
        state.CurrentMonth -= 1;
      }
    },
    NextMonth: (state) => {
      // Increment the current month
      if (state.CurrentMonth === 11) {
        state.CurrentYear += 1;
        state.CurrentMonth = 0; // January (0-based index)
      } else {
        state.CurrentMonth += 1;
      }
    },
    ChangeView: (state, action: PayloadAction<string>) => {
      state.view = action.payload;
    },
    EventModal: (state, action: PayloadAction<boolean>) => {
      state.ViewEventModal = action.payload;
    },
  },
});

export const {
  PrevMonth,
  NextMonth,
  ChangeView,
  EventModal,
  addEv,
  delEv,
  updateEvent,
  PrevDay,
  NextDay,
  setDay,
} = calenderSlice.actions;

export default calenderSlice.reducer;
