import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
	params : {
		slug : string;
	}
}

export function generateMetadata({ params } : Props) {
	return {
		title : `제품의 이름 : ${params.slug}`
	}
}

export default async function ProductPage({params : {slug}} : Props) {
/* 	if(params.slug === 'nothing') {
		notFound();
	} */

	// 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌

	const product = await getProduct(slug);

	if(!product) {
		notFound();
	}

	return (
		<div>{product.name} 설명</div>
	)
}

export async function generateStaticParams() {
	// 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
	const products = await getProducts();
	return products.map(product => ({
		slug : product.id
	}));
}