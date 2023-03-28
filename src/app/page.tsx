import Image from 'next/image';
import { notFound } from 'next/navigation';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

export default function Home() {
	console.log('안녕 -- 서버');
	console.log(os.hostname());

	// const [naem, setNaem] = useState(''); --> 에러발생

  return (
		<>
			<h1>홈페이지입니다. ver3!!!!</h1>
			<Counter />
			<Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8" alt="shop" width={400} height={400} />
		</>
	);
}
