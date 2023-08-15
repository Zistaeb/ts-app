export   const createProduct = (
	id: string | number, // Puede ser de tipo `string` o `number`.
	isNew: boolean = true,
	stock: number = 10,
) => {
	return {
		id,
		stock,
		isNew
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

const p4 = createProduct(7, true, 100);
console.log(p4);

const p5 = createProduct(73, true);
console.log(p5);
