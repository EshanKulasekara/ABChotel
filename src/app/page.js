"use client";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="hero bg-[url('../../public/hero.png')] w-full h-screen z-0">
        <div className="w-full h-screen bg-gradient-to-b from-gray-700 via-tranparent to-transparent z-10 absolute inset-0">
          <h1 className="text-3xl font-medium absolute bottom-1/3 left-1/2 transform -translate-x-1/2">A Tropical Getaway</h1>
          <div className="book-field absolute left-1/2 top-3/4 transform -translate-x-1/2 bg-white/80 p-6 flex flex-col md:flex-row gap-4 items-center justify-center w-full">
            {/* Check-in Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Check-In</span>
              </label>
              <input type="date" className="input input-bordered" />
            </div>
            {/* Check-out Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Check-out</span>
              </label>
              <input type="date" className="input input-bordered" />
            </div>
            {/* Room Type Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Room Type</span>
              </label>
              <select className="select select-bordered">
                <option>Deluxe</option>
                <option>Suite</option>
                <option>Family</option>
                <option>Standard</option>
              </select>
            </div>
            {/* Name Text Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="Enter name" className="input input-bordered" />
            </div>
            {/* Book Button */}
            <button className="btn btn-primary mt-4 md:mt-8 self-end">Book Now</button>
          </div>
        </div>
      </div>
      <div className="content w-full h-[300vh] bg-white"></div>
    </div>
  );
}
