
export default function Item({name,quantity,category}){
    return(
       <li className="p-2 m-4 bg-slate-900 max-w-sm">
        <div>{name}</div>
        <div>buy {quantity} in {category}</div>
       </li>

    );
};

