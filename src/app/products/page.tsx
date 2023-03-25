import Link from 'next/link'
import React from 'react'

export default function Produce() {
	return (
		<>
			<div>Produce</div>
			<ul>
				<li><Link href="/products/shirt">shirt</Link></li>
				<li><Link href="/products/pants">pants</Link></li>
				<li><Link href="/products/skirt">skirt</Link></li>
				<li><Link href="/products/shoes">shoes</Link></li>
			</ul>
		</>
	)
}
