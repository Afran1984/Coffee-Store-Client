import Swal from 'sweetalert2'
import NavCoffee from "./NavCoffee";
const AddCoffeesss = () => {
    const handelAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const chof = form.chof.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const chatagory = form.chatagory.value;
        const details = form.details.value;
        const url = form.url.value;

        const addCoffee = {name, chof, supplier, taste, chatagory, details, url}
        console.log(addCoffee);
        // send data to the Server

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    };

    return (
        <div>
            <NavCoffee></NavCoffee>
           <div className="bg-[#F4F3F0] p-24">
           <h3 className="text-3xl font-extrabold">Add Coffee....</h3>
            <form onSubmit={handelAddCoffee}>
                {/* coffee name */}
                <div className="md:flex gap-3">
                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                    <input type="text"  name="name"  placeholder="Enter Coffee Name" className="input input-bordered input-accent w-full" />
                    </label>
                </div>

                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Chof</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="chof" placeholder="Type Chop " className="input input-bordered input-accent w-full" />
                    </label>
                </div>
                </div>
                {/* Supplayer */}
                <div className="md:flex gap-3">
                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="supplier" placeholder="Enter Coffee Supplayer" className="input input-bordered input-accent w-full" />
                    </label>
                </div>

                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="taste"  placeholder="Enter Coffee Test" className="input input-bordered input-accent w-full" />
                    </label>
                </div>
                </div>
                {/* Chatagori */}
                <div className="md:flex gap-3 mb-8">
                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Chatagory</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="chatagory" placeholder="Enter Coffee Category" className="input input-bordered input-accent w-full" />
                    </label>
                </div>

                <div className="form_control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="details" placeholder="Enter Coffee Details " className="input input-bordered input-accent w-full" />
                    </label>
                </div>
                </div>
                {/* photo */}
                
                <div className="form_control w-full">
                    <label className="label">
                        <span className="label-text">photo Url</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="url" placeholder=" Coffee url" className="input input-bordered input-accent w-full" />
                    </label>
                </div>
               <div className="mt-8">
               <button className="btn btn-outline w-full mb-8">Add Coffee</button>
               </div>
            </form>

           </div>
        </div>
    );
};

export default AddCoffeesss;