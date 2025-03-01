import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLorem } from '../redux/loremSlice';

const LoremComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <p>No data found</p>;

  return (
    <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default LoremComponent;
