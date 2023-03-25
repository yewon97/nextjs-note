import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
	params : {
		slug : string;
	}
}

export default function PantsPage({params} : Props) {
	if(params.slug === 'nothing') {
		notFound();
	}
	return (
		<div>{params.slug} 설명</div>
	)
}

export function generateStaticParams() {
	const products = ['pants', 'skirt'];
	return products.map(product => ({
		slug : product
	}))
}