import React from 'react';
import { activities } from '../data/activities';

function ActivityList({ addToCart }) {
  return (
    <section id="activities" className="activities-section">
      <h2>Activitats Disponibles</h2>
      <div className="cards-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="card">
            <img src={activity.image} alt={activity.name} />
            <div className="card-body">
              <h3>{activity.name}</h3>
              <p>{activity.description}</p>
              <div className="card-footer">
                <span className="price">{activity.price}€</span>
                <button onClick={() => addToCart(activity)} className="btn-add">
                  Afegir +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityList;