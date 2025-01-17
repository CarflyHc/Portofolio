/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const GithubModal = ({ showModal, onClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.github.com/users/github-john-doe');
      const result = await response.json();
      setData(result);
    };

    if (showModal) {
      fetchData();
    }
  }, [showModal]);

  if (!showModal) return null;

  return (
    <>
      <Button variant="danger" >En savoir plus</Button>
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title>Mon Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          {data ? (
            <div className="container bg-dark text-white pb-4">
              <img src={data.avatar_url} alt="Avatar" className="img-fluid mb-2" />
              <div className="container">
                <i className="bi bi-person me-2"></i> 
                <a href="https://github.com/github-john-doe" target='_blank'>{data.name}</a>
              </div>
              <hr className="my-2" />
              <div className="container">
                <i className="bi bi-geo-alt me-2"></i> {data.location}
              </div>
              <hr className="my-2" />
              <div className="container">
                <i className="bi bi-card-text me-2"></i> {data.bio}
              </div>
              <hr className="my-2" />
              <div className="container">
                <i className="bi bi-box me-2"></i> Repositories : {data.public_repos}
              </div>
              <hr className="my-2" />
              <div className="container">
                <i className="bi bi-people me-2"></i> Followers : {data.followers}
              </div>
              <hr className="my-2" />
              <div className="container">
                <i className="bi bi-people me-2"></i> Following : {data.following}
              </div>
            </div>
          ) : (
            <p>Chargement des données...</p>
          )}
        </Modal.Body>
        <Modal.Footer className='bg-dark' >
          <Button variant="secondary" onClick={onClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GithubModal;