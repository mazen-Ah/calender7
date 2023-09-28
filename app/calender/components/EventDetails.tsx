// import React, { useState } from "react";

// type EventDetailsProps = {
//   event: {
//     date: string;
//     description: string;
//     fromTime: string;
//     id: string;
//     title: string;
//     toTime: string;
//   };
//   onClose: () => void;
// };

// const EventDetails = ({ event, onClose }: EventDetailsProps) => {
//   const [editedEvent, setEditedEvent] = useState(event);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setEditedEvent({ ...editedEvent, [name]: value });
//   };

//   const handleSave = () => {
//     // Dispatch an action to update the event in your Redux store
//     // You can access the edited event data in the editedEvent state
//     // and the event ID from props.
//     // Example:
//     // dispatch(updateEv({ id: event.id, updatedEvent: editedEvent }));
//     onClose(); // Close the popup after saving
//   };
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center z-10">
//       <div className="bg-white p-6 rounded shadow-lg w-1/3 max-md:w-full">
//         <h2 className="text-2xl font-semibold mb-4">Edit Event</h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Title
//           </label>
//           <input
//             type="text"
//             name="title"
//             value={editedEvent.title}
//             onChange={handleInputChange}
//             className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={editedEvent.description}
//             onChange={handleInputChange}
//             className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Date
//           </label>
//           <input
//             type="text"
//             name="date"
//             value={editedEvent.date}
//             onChange={handleInputChange}
//             className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         {/* Add more fields for editing other event properties */}
//         <div className="flex justify-end">
//           <button
//             onClick={handleSave}
//             className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//           >
//             Save
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventDetails;
