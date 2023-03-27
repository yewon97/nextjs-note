import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

// export const revalidate = 3;

export default async function Produce() {

	// 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌

	const products = await getProducts();
	
	/* const res =  await fetch("https://meowfacts.herokuapp.com");
	const data = await res.json();
	const factText = data.data[0]; */

	return (
		<>
			<div>Produce</div>
			<ul>
				{
					products.map((product, index) => (
						<li key={index}>
							<Link href={`/products/${product.id}`}>{product.name}</Link>
						</li>
					))
				}
			</ul>
			<MeowArticle />
		</>
	)
}
