import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import {useTypedDispatch} from "../hooks/redux.ts";
import { setCity } from '../reducers/VacancySlice';

export default function TabsMantine() {
    const navigate = useNavigate();
    const {tabValue} = useParams();
    const dispatch = useTypedDispatch();
    return (
        <Tabs
            value={tabValue}
            defaultValue="Москва"
            onChange={(value) => {
                if (value) {
                    navigate(`/${value}`)
                    dispatch(setCity(value))
                }
            }
            }
        >
            <Tabs.List>
                <Tabs.Tab value="Москва">Москва</Tabs.Tab>
                <Tabs.Tab value="Санкт-Петербург">Санкт-Петербург</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}