"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/app/hooks/hooks";
import { EventModal, addEv } from "@/app/store/features/calenderSlice";
import { v4 as uuidv4 } from "uuid";
interface EventFormInput {
  title: string;
  date: string;
  description: string;
  time: string;
}

const EventPopup = ({}) => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setValue, reset, watch, formState } =
    useForm<EventFormInput>();
  const { isDirty } = formState;

  const onSubmit: SubmitHandler<EventFormInput> = (data) => {
    // Handle form submission (e.g., send data to a server)
    // You can add your logic here to save event details

    // Generate a unique ID for the event
    const eventId = uuidv4();

    // Create the event object with the unique ID
    const event = {
      id: eventId, // Unique ID
      title: data.title,
      date: data.date,
      description: data.description,
      time: data.time,
    };

    dispatch(addEv(event));
    // Reset the form and close the modal
    reset();
    dispatch(EventModal(false));
  };
  const handleCancel = () => {
    reset();
    dispatch(EventModal(false));
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-10`}
    >
      <div className="bg-white p-6 rounded shadow-lg w-1/3 max-md:w-full">
        <h2 className="text-2xl font-semibold mb-4">Add Event</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register("title", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              {...register("date", { required: true })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="text-gray-700">
              Time
            </label>
            <input
              type="time"
              id="time"
              {...register("time")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ${
                !isDirty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isDirty}
            >
              Add Event
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="ml-2 border-[1px] px-4 py-3 rounded-lg text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventPopup;
function addEvent(event: {
  id: string; // Unique ID
  title: string;
  date: string;
  description: string;
  time: string;
}): any {
  throw new Error("Function not implemented.");
}
