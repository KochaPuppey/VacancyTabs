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
            defaultValue="Moscow"
            onChange={(value) => {
                if (value) {
                    navigate(`/vacancy/${value}`)
                    dispatch(setCity(value))
                }
            }
            }
        >
            <Tabs.List>
                <Tabs.Tab value="Moscow">Москва</Tabs.Tab>
                <Tabs.Tab value="Petersburg">Санкт-Петербург</Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}