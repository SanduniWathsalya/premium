export default function SaleBanner() {
  return (
    <section  className="absolute top-190 left-0 w-full z-20 transform -translate-y-24 px-8 py-2">
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto ">
        {/* New Arrivals */}
      <div className="relative h-64  overflow-hidden shadow-lg group">
  <img
    src="/images/hero2.jpeg"
    alt="New Arrivals"
    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
  />
<div className="absolute inset-0 bg-gray-500/50 p-6 flex flex-col justify-center items-start">
  <h3 className="text-black text-2xl font-semibold mb-2">New Arrivals</h3>
  <p className="text-black mb-4">Discover the latest trends and styles now available.</p>
  <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800 transition">
    Shop Now
  </button>
</div>

</div>


        {/* Hot Sale */}
        <div className="relative h-64  overflow-hidden shadow-lg group" >
          <img
            src="/images/jj.jpeg" // Make sure this image exists in your public/images folder
            alt="Hot Sale"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
          />
         <div className="absolute inset-0 bg-gray-500/50 p-6 flex flex-col justify-center items-start">
  <h3 className="text-black text-2xl font-semibold mb-2">Hot Sale</h3>
  <p className="text-black mb-4">Limited time offers!</p>
  <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-800 transform hover:scale-105 transition duration-300">
    Shop Now
  </button>
</div>

       </div>
      </div>
    </section>
  );
}
