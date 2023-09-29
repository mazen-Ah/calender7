import React, { useEffect, useState } from "react";
import { Modal, TextInput, Textarea, Button } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/app/hooks/hooks";
import { delEv, updateEvent } from "@/app/store/features/calenderSlice";

type Props = {
  isOpened: boolean;
  isClose: () => void;
  event: any;
};

const EventEditPopup = ({ isOpened, isClose, event }: Props) => {
  const [modalWidth, setModalWidth] = useState("55%");

  const handleResize = () => {
    const newModalWidth = window.innerWidth <= 1068 ? "100%" : "55%";
    setModalWidth(newModalWidth);
  };
  const dispatch = useAppDispatch();
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: event,
  });
  const { isDirty } = formState;

  const onSubmit: SubmitHandler<any> = (data) => {
    if (!data.id) {
      console.error(
        "No 'id' provided in the form data. Unable to update the event."
      );
      return;
    }
    dispatch(updateEvent(data));
    reset(data);
    isClose();
  };

  const handleDelete = () => {
    dispatch(delEv(event.id));
    isClose();
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Modal
      size={modalWidth}
      opened={isOpened}
      onClose={isClose}
      title="Edit Event"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <TextInput label="Title" {...register("title")} />
        <TextInput label="Date" type="date" {...register("date")} />
        <Textarea label="Description" rows={4} {...register("description")} />
        <TextInput label="From Time" type="time" {...register("fromTime")} />
        <TextInput label="To Time" type="time" {...register("toTime")} />

        <input type="hidden" {...register("id")} value={event.id} />

        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ${
              !isDirty ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isDirty}
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="ml-2 border-[1px] px-4 py-3 rounded-lg text-red-600 hover:text-red-800 focus:outline-none"
          >
            Delete
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EventEditPopup;
