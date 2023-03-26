import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import os from 'os'; // 노드 APIs
import Counter from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	console.log('안녕 -- 서버');
	console.log(os.hostname());

	// const [naem, setNaem] = useState(''); --> 에러발생

  return (
		<>
			<h1>홈페이지입니다.</h1>
			<Counter />
		</>
	);
}
