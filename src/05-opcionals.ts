const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew?: boolean,
	stock?: number, // PARÁMETRO OPCINAL.
) => {
	return { // Retornamos un objeto con los valores pasados como parámetros.
		id,
		stock: stock ?? 10,
		isNew: isNew ?? true,
	}
}

const p1 = createProduct(1, false, 12);
console.log(p1); // { id: 1, stock: undefined, isNew: true }

const p2 = createProduct(1);
console.log(p2);

// 0 === false
//"" === false
// false === false

const p3 = createProduct(1, false, 0);
console.log(p3);
