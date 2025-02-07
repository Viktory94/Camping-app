import "./../main.scss";
import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import Modal from 'react-modal';

import CounterTent from './CounterTent.js';
import CounterBag from './CounterBag.js';
import CounterRug from './CounterRug.js';
import CounterSet from './CounterSet.js';




const Form = () => {
  const [IsOpen, setOpen] = useState(false);


  const open = () => {
    setOpen(true);
  };
  
  const close = () => {
    setOpen(false);
  };

  const {register, formState: {errors}, handleSubmit, setError} = useForm();



  const [data, setData] = useState([]);
 
  useEffect(() => {
    fetch("http://localhost:8000/camp")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);


  const onSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/camp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Ошибка при отправке данных");
      }
  
      const result = await response.json();
      setData([...data, result]); // Обновляем состояние данных
      alert(
        `Забронировано успешно! Назовите свой номер ${formData.tel} в пункте выдачи для получения оборудования`
      );
    } catch (error) {
      setError("service", { type: "Error", message: "Something goes wrong" });
      console.error(error);
    }
  };














  const Content = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <div className="block">
          <p>Палатка:</p>
          <select {...register("tent", { required: true })} name="tent" id="1">
            <option value="Двухместная">Двухместная</option>
            <option value="Трехместная">Трехместная</option>
          </select>
          <CounterTent />
        </div>

        <div className="block">
          <p>Спальный мешок:</p>
          <select {...register("bag", { required: true })} name="bag" id="2">
            <option value="Спальный мешок +10">Спальный мешок +10</option>
            <option value="Спальный мешок 0">Спальный мешок 0</option>
            <option value="Спальный мешок -18">Спальный мешок -18</option>
          </select>
          <CounterBag />
        </div>

        <div className="block">
          <p>Коврик:</p>
          <select {...register("rug", { required: true })} name="rug" id="3">
            <option value="Коврик пенный">Коврик пенный</option>
            <option value="Коврик туристический">Коврик туристический</option>
          </select>
          <CounterRug />
        </div>

        <div className="block">
          <p>Набор:</p>
          <select {...register("set", { required: true })} name="set" id="4">
            <option value="Для одного">Для одного</option>
            <option value="Для двоих">Для двоих</option>
            <option value="Для троих">Для троих</option>
          </select>
          <CounterSet />
        </div>

        <p>Количество дней:</p>
        <select {...register("days", { required: true })} name="days" id="5">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <p>
          Выберите дату получения:
          <input
            {...register("date", { required: true })}
            type="date"
            name="date"
            min="2023-01-01"
          />
        </p>

        <label>Имя:</label>
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Введите имя"
        />

        <label>
          Телефон (Пример: +79000000000):
          <input
            {...register("tel", { required: true })}
            type="text"
            placeholder="Введите номер телефона"
            onChange={(e) =>
              e.target.value.replace(/\D+/g, "")
            }
          />
        </label>

        {errors.name && <p>Имя обязательно</p>}
        {errors.tel && <p>Телефон обязателен</p>}

        <button type="submit" className="btn2">
          Отправить
        </button>
        <button onClick={close} className="btn2">
          Закрыть
        </button>
      </fieldset>
    </form>
  );

  return (
    <div>
      <button onClick={open} className="btn1">
        Забронировать
      </button>
      <Modal isOpen={IsOpen} onRequestClose={close} ariaHideApp={false}>
        {Content}
      </Modal>
    </div>
  );
};


export default Form;