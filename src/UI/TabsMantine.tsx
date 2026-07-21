import { Link, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';
import {useTypedDispatch} from "../hooks/redux.ts";
import { setCity } from '../reducers/VacancySlice';

export default function TabsMantine() {
    const {tabValue} = useParams();
    const dispatch = useTypedDispatch();
    return (
        <Tabs
            value={tabValue}
            defaultValue="Москва"
            onChange={(value) => {
                if (value) {
                    dispatch(setCity(value))
                }
            }
            }
        >
            <Tabs.List>
                <Tabs.Tab value="Москва">
                    <Link to='/vacancy/Москва'>
                        Москва
                    </Link>
                </Tabs.Tab>
                <Tabs.Tab value="Санкт-Петербург">
                    <Link to='/vacancy/Санкт-Петербург'>
                    Санкт-Петербург
                    </Link>
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}