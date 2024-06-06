import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAppointmentList } from './useCase/useGetAppointmentList';

// import { Container } from './styles';

const AppointmentsList: React.FC = () => {
  const { id: clientId } = useParams();
  const query = useGetAppointmentList(clientId);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.data) {
      setResponseData(query.data);
      const newData = FacialFormFactory(query.data);
      reset(newData);
    }
  }, [reset, query.data]);

  return <div />;
}

export default AppointmentsList;