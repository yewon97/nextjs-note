import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { notFound } from 'next/navigation';
import os from 'os'; // 노드 APIs

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	console.log('안녕');
	console.log(os.hostname());

	const [naem, setNaem] = useState('');

  return <h1>홈페이지다!!!</h1>
}
