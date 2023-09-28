import { createSlice } from "@reduxjs/toolkit";
import dayjs, { Dayjs } from "dayjs";
import { GetMonth } from "@/app/calender/util/GetMonth";

export interface CounterState {
  month: Dayjs[];
  view: string;
  ViewEventModal: boolean;
  CurrentYear: number;
  CurrentMonth: number;
  CurrentWeek?: any;
  events: [
    {
      date: any;
      description: any;
      id: any;
      time: any;
      title: any;
    }
  ];
}

const initialState: CounterState = {
  month: GetMonth(),
  view: "month",
  ViewEventModal: false,
  CurrentYear: dayjs().year(),
  CurrentMonth: dayjs().month(),
  events: [
    {
      date: "2023-09-23",
      description: "Technical-Interview",
      id: "3a17ed97-73f8-4f97-841d-6f3f8b5f2db6",
      time: "15:00",
      title: "Technical-Interview",
    },
  ],
};

export const calenderSlice = createSlice({
  name: "calender",
  initialState,
  reducers: {
    addEv: (state, action) => {
      state.events.push(action.payload);
    },
    PrevMonth: (state) => {
      // Decrement the current month
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
    ChangeView: (state, action) => {
      state.view = action.payload;
    },
    EventModal: (state, action) => {
      state.ViewEventModal = action.payload;
    },
  },
});

export const { PrevMonth, NextMonth, ChangeView, EventModal, addEv } =
  calenderSlice.actions;

export default calenderSlice.reducer;
