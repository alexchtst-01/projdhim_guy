import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import DeleteMessageBox from './card/DeleteMessageBox';
import SaveMessageBox from './card/SaveMessageBox';
import image1 from '../assets/pusri-palembang-akan-membangun-pabrik-pusri-iiib-di-palembang.jpg';
import image2 from '../assets/OIP.jpeg';
import image3 from '../assets/dc3cb15b66017a297c4848099eb9d7a7.jpeg';

const images = {
  'pusri-palembang-akan-membangun-pabrik-pusri-iiib-di-palembang.jpg': image1,
  'OIP.jpeg': image2,
  'dc3cb15b66017a297c4848099eb9d7a7.jpeg': image3
};

const Dashboard = () => {
  const [isManaging, setIsManaging] = useState(false);
  const [carouselItems, setCarouselItems] = useState([
    {
      id: 1,
      title: "Pusri IIIB Development",
      image: 'pusri-palembang-akan-membangun-pabrik-pusri-iiib-di-palembang.jpg',
      description: "New factory development in Palembang",
      active: true
    },
    {
      id: 2,
      title: "Company Overview",
      image: 'OIP.jpeg',
      description: "PT Pupuk Sriwidjaja Facilities",
      active: true
    },
    {
      id: 3,
      title: "Industrial Operations",
      image: 'dc3cb15b66017a297c4848099eb9d7a7.jpeg',
      description: "Our production facilities and operations",
      active: true
    }
  ]);

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [isDeleteBoxVisible, setIsDeleteBoxVisible] = useState(false);
  const [isSaveBoxVisible, setIsSaveBoxVisible] = useState(false);

  const handleCloseManagement = () => {
    setIsManaging(false);
  };

  const handleDeleteRequest = (id) => {
    setDeleteItemId(id);
    setIsDeleteBoxVisible(true);
  };

  const handleConfirmDelete = () => {
    setCarouselItems(carouselItems.filter((item) => item.id !== deleteItemId));
    setIsDeleteBoxVisible(false);
    setDeleteItemId(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteBoxVisible(false);
    setDeleteItemId(null);
  };

  const handleSaveRequest = () => {
    setIsSaveBoxVisible(true);
  };

  const handleConfirmSave = () => {
    setIsSaveBoxVisible(false);
    handleCloseManagement(); // Close management mode after saving
  };

  const handleCancelSave = () => {
    setIsSaveBoxVisible(false);
  };

  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">PT Pupuk Sriwidjaja</h1>
          <button
            onClick={() => setIsManaging(!isManaging)}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
          >
            <Settings size={16} />
            {isManaging ? 'Exit Management' : 'Manage Carousel'}
          </button>
        </div>

        {isManaging ? (
          <CarouselManager
            items={carouselItems}
            setItems={setCarouselItems}
            images={images}
            onDeleteRequest={handleDeleteRequest}
            onSaveRequest={handleSaveRequest}
          />
        ) : (
          <div className="mb-6">
            <Carousel
              items={carouselItems.filter((item) => item.active)}
              images={images}
            />
          </div>
        )}

        {isDeleteBoxVisible && (
          <DeleteMessageBox
            message="Are you sure you want to delete this slide? This action cannot be undone."
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}

        {isSaveBoxVisible && (
          <SaveMessageBox
            message="Are you sure you want to save these changes?"
            onConfirm={handleConfirmSave}
            onCancel={handleCancelSave}
          />
        )}

        <div className="mt-6">
          <h2 className="sub-judul font-semibold paragraph-spacing">Sekilas Perusahaan</h2>
          <h3 className="sub-judul-2 paragraph-spacing">
            Selama lebih dari 50 tahun, Pusri telah memberikan kontribusi yang signifikan bagi kemajuan industri pupuk, ketahanan pangan dan kemakmuran nasional.
          </h3>
          <p className="paragraph-spacing">
            PT Pupuk Sriwidjaja Palembang (Pusri) adalah perusahaan yang didirikan sebagai pelopor produsen pupuk urea di Indonesia pada tanggal 24 Desember 1959 di Palembang Sumatera Selatan, dengan nama PT Pupuk Sriwidjaja (Persero). Pusri memulai operasional usaha dengan tujuan utama untuk melaksanakan dan menunjang kebijaksanaan dan program pemerintah di bidang ekonomi dan pembangunan nasional, khususnya di industri pupuk dan kimia lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

const CarouselManager = ({ items, setItems, images, onDeleteRequest, onSaveRequest }) => {
  const [editItems, setEditItems] = useState(items);

  useEffect(() => {
    setEditItems(items);
  }, [items]);

  const handleToggleActive = (id) => {
    setEditItems(
      editItems.map((item) =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };

  const handleUpdateItem = (id, field, value) => {
    setEditItems(
      editItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSaveChanges = () => {
    setItems(editItems);
    onSaveRequest(); // Show save confirmation box
  };

  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Carousel Management</h3>
      <div className="space-y-4">
        {editItems.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start gap-4">
              <img
                src={images[item.image]}
                alt={item.title}
                className="w-32 h-24 object-cover rounded"
              />
              <div className="flex-1 space-y-2">
                <input
                  type="text"
                  value={item.title}
                  onChange={(e) => handleUpdateItem(item.id, 'title', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Slide Title"
                />
                <textarea
                  value={item.description}
                  onChange={(e) => handleUpdateItem(item.id, 'description', e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Slide Description"
                  rows="2"
                />
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={item.active}
                      onChange={() => handleToggleActive(item.id)}
                      className="form-checkbox"
                    />
                    <span className="text-sm">Active</span>
                  </label>
                  <button
                    onClick={() => onDeleteRequest(item.id)}
                    className="ml-auto text-sm text-red-600 hover:text-red-800"
                  >
                    Delete Slide
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleSaveChanges}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
};

const Carousel = ({ items, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying && items.length > 0) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) {
    return <div className="text-center p-4">No active slides</div>;
  }

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="relative h-64 md:h-96">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={images[item.image]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors
                  ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;