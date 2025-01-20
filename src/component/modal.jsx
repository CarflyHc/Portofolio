/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "../assets/modal.css"

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
      <Modal show={showModal} onHide={onClose} size="lg" dialogClassName='modal-dialog-centered' >
        <Modal.Header className="bg-dark text-white" closeButton>
          <Modal.Title>Mon Profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
          {data ? (
            <div className="container bg-dark text-white pb-4 row">
              <img src={data.avatar_url} alt="Avatar" className="img-fluid avatar mb-2 col-lg-6 col-md-6 col-12 d-flex align-items-start" />
              <div className="col-md-6 col-lg-6"> 
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
                  <i className="bi bi-card-text me-2"></i> {data.bio && (
                    <span className="text-wrap">{data.bio}</span>)}
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