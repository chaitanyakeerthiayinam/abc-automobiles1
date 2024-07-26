import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
//import { Navigate, useNavigate } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UpdateVehicle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/vehicles/${id}`)
      .then((response) => {
        setVehicle(response.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the vehicle data!", error);
      });
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      image: vehicle?.image || "",
      name: vehicle?.name || "",
      price: vehicle?.price || "",
      mileage: vehicle?.mileage || "",
      color: vehicle?.color || "",
      seats: vehicle?.seats || "",
      fuel: vehicle?.fuel || "",
      gear: vehicle?.gear || "",
      description: vehicle?.description || "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Image URL is required"),
      name: Yup.string()
        .min(5, "Name must be at least 5 characters")
        .required("Name is required"),
      price: Yup.number()
        .min(1, "Price must be greater than 0")
        .required("Price is required"),
      mileage: Yup.number()
        .min(1, "Mileage must be greater than 0")
        .required("Mileage is required"),
      seats: Yup.number()
        .min(1, "Seats must be greater than 0")
        .max(6, "Seats must be less than 7")
        .required("Seats is required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
      axios
        .put(`http://localhost:5000/vehicles/${id}`, values)
        .then(()=> {
          setStatus("success");
          resetForm();
          navigate("/vehicle-list");
         })
        
        .catch((error) => {
          setStatus("error");
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return (
    <div className="container mt-4">
      <h2> Update Vehicle</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            id="image"
            name="image"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            data-testid="image"
          />

          {formik.touched.image && formik.errors.image ? (
            <div className="text-danger">{formik.errors.image}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            data-testid="name"
          />

          {formik.touched.name && formik.errors.name ? (
            <div className="text-danger">{formik.errors.name}</div>
          ) : null}
        </div>

        
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            data-testid="price"
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-danger">{formik.errors.price}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="mileage" className="form-label">
            Mileage
          </label>
          <input
            id="mileage"
            name="mileage"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mileage}
            data-testid="mileage"
          />

          {formik.touched.mileage && formik.errors.mileage ? (
            <div className="text-danger">{formik.errors.mileage}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <input
            id="color"
            name="color"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.color}
            data-testid="color"
          />

          {formik.touched.color && formik.errors.color ? (
            <div className="text-danger">{formik.errors.color}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="seats" className="form-label">
            Seats
          </label>
          <input
            id="seats"
            name="seats"
            type="number"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.seats}
            data-testid="seats"
          />

          {formik.touched.seats && formik.errors.seats ? (
            <div className="text-danger">{formik.errors.seats}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="fuel" className="form-label">
            Fuel
          </label>
          <input
            id="fuel"
            name="fuel"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fuel}
            data-testid="fuel"
          />

          {formik.touched.fuel && formik.errors.fuel ? (
            <div className="text-danger">{formik.errors.fuel}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="gear" className="form-label">
            Gear
          </label>
          <input
            id="gear"
            name="gear"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gear}
            data-testid="gear"
          />

          {formik.touched.gear && formik.errors.gear ? (
            <div className="text-danger">{formik.errors.gear}</div>
          ) : null}
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            name="description"
            type="text"
            className="form-control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            data-testid="description"
          />

          {formik.touched.description && formik.errors.description ? (
            <div className="text-danger">{formik.errors.description}</div>
          ) : null}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting}
        >
          Update
        </button>

        {formik.status && formik.status === "success" && (
          <span data-testid="response" className="text-success">
            Success
          </span>
        )}
        {formik.status && formik.status ===  'error' && (
          <span data-testid='response-dange' className='textr' >
            Error
          </span>
        )}
      </form>
    </div>
  );
}

export default UpdateVehicle;