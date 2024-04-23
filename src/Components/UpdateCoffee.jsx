import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
      const updateLoadedCoffee = useLoaderData()
      console.log(updateLoadedCoffee); 
      const { _id, name, quantity, supplier, taste, category, details, photo } = updateLoadedCoffee;


      const handleUpdateCoffee = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const newCoffee = {name, quantity, supplier, taste, category, details, photo};
            console.log(newCoffee);


            // send data to the server
            fetch(`http://localhost:5000/coffee/${_id}`, {
                  method: 'put',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify(newCoffee),
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              Swal.fire({
                                    title: "Success !",
                                    text: "Coffee Update successfully!",
                                    icon: "success"
                              });
                        }
                  })
      }


      return (
            <div className='bg-[#F4F3F0] p-24 text-left'>
                  <h2 className="text-4xl">Update coffee { name }</h2> 
                  <section className="p-6 bg-gray-100 text-gray-900">
                        <form onSubmit={handleUpdateCoffee} className="container flex flex-col space-y-12">
                              <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                                     {/* Product name and Quantity */}
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="firstName" name='name' className="text-sm">Coffee Name </label>
                                                <input type="text" name='name' defaultValue={name} placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 p-2" />
                                          </div>
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="lastName" className="text-sm">Quantity</label>
                                                <input type='text' name='quantity' defaultValue={quantity} placeholder="Quantity" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 p-2" />
                                          </div>

                                    </div>

                                    {/* supplier and taste list */}

                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="Supplier" className="text-sm">Supplier </label>
                                                <input type="text" name='supplier'  defaultValue={supplier} placeholder="Name of Supplier" className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-300 p-2" />
                                          </div>
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="Taste" className="text-sm text-left">Taste</label>
                                                <input type="text" name="taste"  defaultValue={taste} placeholder="Taste" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 p-2" />
                                          </div>
                                          

                                    </div>

                                    {/* category and details list */}


                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="Category" className="text-sm">Category </label>
                                                <input type="text" name='category' defaultValue={category} placeholder="Name of category" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 p-2" />
                                          </div>
                                          <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="Details" className="text-sm text-left">Details</label>
                                                <input type="text" name="details" defaultValue={details} placeholder="details" className="w-full rounded-md focus:ring focus:ring-opacity-75  border-gray-300 p-2" />
                                          </div>

                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                                <label htmlFor="photoURL" className="text-sm text-left">PhotoURL</label>
                                                <input type="text" name="photo" defaultValue={photo} placeholder="PhotoURL" className="w-full rounded-md focus:ring focus:ring-opacity-75 border-gray-300 p-2" />
                                    </div>
                                    <div className="col-span-full sm:col-span-3">
                                                
                                          <input type="submit" value="Update Coffee" className='w-full btn btn-primary' />
                                    </div>
                              </fieldset>
                              
                        </form>
                  </section>
            </div>
      );
};

export default UpdateCoffee;