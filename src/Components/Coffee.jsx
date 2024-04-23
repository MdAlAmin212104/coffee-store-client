import React from 'react';

const Coffee = ({ coffee }) => {
      const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
      

      const handleDelete = id => {
            console.log(id, 'delete');
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
                                    <button className="btn join-item">EDIT</button>
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