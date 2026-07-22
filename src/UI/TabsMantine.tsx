import {useParams, useNavigate, useSearchParams} from 'react-router-dom';
import { Tabs } from '@mantine/core';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux.ts";
import { setCity} from '../reducers/VacancySlice';
import {useEffect} from "react";

export default function TabsMantine() {
    const {
        search,
        selectSkills,
    } = useTypedSelector(state => state. vacancyReducer)

    const {city} = useParams();
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (city) {
            dispatch(setCity(city))
        }
    }, []);

    useEffect(() => {
        const params: Record<string, string> = {};
        if (search) {
            params.search = search;
        }
        if (selectSkills.length) {
            params.selectSkills = selectSkills.join(',');
        }
         setSearchParams(params);
    }, [search, city, selectSkills]);

    return (
        <Tabs
            defaultValue="Москва"
            value={city}
            onChange={(value) => {
                if (value) {
                    navigate({
                        pathname: `/vacancy/${value}`,
                        search: `${searchParams}`,
                    })
                    dispatch(setCity(value))
                }
            }
            }
        >
            <Tabs.List>
                <Tabs.Tab value="Москва">
                        Москва
                </Tabs.Tab>
                <Tabs.Tab value="Санкт-Петербург">
                    Санкт-Петербург
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}