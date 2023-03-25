import React from 'react'

type Props = {
	params : {
		slug : string;
	}
}

export default function PantsPage({params} : Props) {

	return (
		<div>{params.slug} 설명</div>
	)
}
