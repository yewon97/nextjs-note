import Link from 'next/link'
import React from 'react'

const products = ['shirt','pants','skirt','shoes']

export default function Produce() {
	return (
		<>
			<div>Produce</div>
			<ul>
				{
					products.map((product, index) => (
						<li key={index}>
							<Link href={`/products/${product}`}>{product}</Link>
						</li>
					))
				}
			</ul>
		</>
	)
}
