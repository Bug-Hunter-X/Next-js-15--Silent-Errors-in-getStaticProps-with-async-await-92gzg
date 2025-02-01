// bugSolution.js
export async function getStaticProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status}`);
    }
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        error: 'Failed to load data',
      },
    };
  }
}

export default function Page({ data, error }) {
  if (error) {
    return <p>{error}</p>;
  }
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
} 