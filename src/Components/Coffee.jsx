import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee }) => {
      const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
      

      const handleUpdate = (id) => {
            console.log(id);
      }

      const handleDelete = id => {
            console.log(id, 'delete');
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                  if (result.isConfirmed) {
                        
                        fetch(`http://localhost:5000/coffee/${id}`, {
                              method: "DELETE",
                        })
                              .then(res => res.json())
                              .then(data => {
                                    console.log(data);
                                    if (data.deletedCount > 0) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your Coffee has been deleted.",
                                                icon: "success",
                                                
                                          });
                                    }
                              })
                  }
            });
      }
      return (
            <div className="card card-side bg-base-100 shadow-xl">
                  <figure><img src={photo} alt="Movie" className='w-[200px] h-[200px]'/></figure>
                  <div className="flex justify-between items-center">
                        <div>
                              <h2 className="card-title">Name : {name}</h2>
                              <p>Details : {details}</p>
                              <p>Supplier information : {supplier}</p>
                              <p>Quantity of Product : {quantity}</p>
                        </div>
                        <div className="card-actions justify-end">
                              <div className="join join-vertical space-y-4">
                                    <button className="btn join-item">VIEW</button>
                                    <Link to={`/updateCoffee/${_id}`}>
                                          <button className="btn join-item">EDIT</button>
                                    </Link>
                                    <button
                                          className="btn join-item bg-orange-500"
                                          onClick={() => handleDelete(_id)}
                                    >X</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Coffee;