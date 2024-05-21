import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CoffeeCard = ({coffee, setCoffees, coffees}) => {
    const {_id, name, chof, supplier, taste, chatagory, details, url } = coffee;

    const handelDelete = _id =>{
      console.log(_id);
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
          
          fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
            title: "Deleted!",
            text: "Your Coffee has been deleted.",
            icon: "success"
          });
        //  After delete refresh 
          const remaining = coffees.filter(cof => cof._id !== _id);
          setCoffees(remaining);
        }
          
        })
        }
      });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-4/12" src={url} alt="Movie"/></figure>
  <div className="flex justify-between w-full pr-3">
  
   <div>
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>{supplier}</p>
    <p>{chatagory}</p>
   </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-3">
  <button className="btn join-item">View</button>
  <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
  <button onClick={() => handelDelete(_id)} className="btn join-item bg-red-700 ">Delete</button>
</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default CoffeeCard;