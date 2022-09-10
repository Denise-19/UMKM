export default (price) =>  {
	if (!price) {
		price = 0
	}else{
		price = Math.round(price)
	}

	price = `Rp. ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
	
	return price
}