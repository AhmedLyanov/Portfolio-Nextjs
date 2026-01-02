import './style.css';
import { timelineData } from '@/constants/timeline';
import Image from 'next/image';

function Timeline() {
  return (
    <section className="timeline">
      {timelineData.map((item, index) => (
        <article key={index} className="timeline__article">
          <div className="timeline__content">
            <h1>{item.title}</h1>
            <time dateTime={item.year}>{item.year}</time>
            <hr />
            <p>{item.description}</p>
          </div>
          <Image src={item.image} alt={item.alt} />
        </article>
      ))}
    </section>
  );
}

export default Timeline;