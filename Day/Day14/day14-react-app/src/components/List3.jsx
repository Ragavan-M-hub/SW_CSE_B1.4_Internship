//Child Component
function ProductList({prod}){
    return(
        <div className="list-box">
            {prod.length === 0 ? (<p>No Products Available</p>):(
                <ul>
                    {prod.map((prod)=>(
                        <li key={prod.id}>
                            {prod.name}: ₹{prod.prices}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

//Parent Component
function ProductListDemo(){
    const product = [
        {id: 1, name: "Laptop", prices: 90000},
        {id: 1, name: "Mouse", prices: 10000},
        {id: 1, name: "Mobile", prices: 50000},
        {id: 1, name: "Keyboard", prices: 20000}
    ]

    return(
        <div>
            <h2>Product Demo</h2>
            <ProductList prod={product} />
        </div>
    )
}

export default ProductListDemo