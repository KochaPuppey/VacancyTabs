import styles from './Main.module.css';
import InputMantine from '../../UI/InputMantine.tsx';
import ButtonMantine from '../../UI/ButtonMantine.tsx';
import AsideSkillAndSity from '../AsideSkillAndSity/AsideSkillAndSity';
import ListVacancy from '../ListVacancy/ListVacancy';
import TabsMantine from "../../UI/TabsMantine.tsx";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useEffect,} from 'react';
import {useTypedSelector, useTypedDispatch}from '../../hooks/redux';
import {fetchVacancy} from '../../reducers/VacancyThunk.ts';
import { setSearch,  } from '../../reducers/VacancySlice';
import PaginationMantine from "../../UI/PaginationMantine.tsx";
export default function MainPage () {
    const {
        isLoading,
        listVacancy,
        error,
        search,
        city,
        selectSkills,
    } = useTypedSelector(state => state. vacancyReducer)
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(
            fetchVacancy({
                searchQuery : search,
                cityQuery: city,
                selectSkills: selectSkills,
            })
        );
    }, [search, city, selectSkills]);

  return (
      <>
    <main className={styles.main}>
      <div className={styles.name}>
        <h3 style={{marginBottom:0}}>Список вакансий</h3>
        <p>по профессии Frontend-разработчик</p>
      </div>
        <div className={styles.tabs}>
            <TabsMantine/>
        </div>
      <div className={styles.search}>
        <InputMantine
            placeholder='Должность или название компании'
            leftSection={<MagnifyingGlassIcon size={16}/>}
            w={'350px'}
            value={search}
            onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
        />
        <ButtonMantine>Найти</ButtonMantine>
      </div>
      <AsideSkillAndSity/>
        {isLoading && 'Загрузка'}
        {error && <span>{error}</span>}
      <ListVacancy vacancies={listVacancy}/>
    </main>
      <div className={styles.pagination}>
          <PaginationMantine />
      </div>
          </>
  )
}