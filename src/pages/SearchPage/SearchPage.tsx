import React, { Suspense, useRef, useState } from 'react';

import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { H1 } from '@components/H1';
import { HeadingBlock } from '@components/HeadingBlock';
import { Input } from '@components/Input';
import { P } from '@components/P';
import { SearchResults } from '@components/SearchResults';


const SearchPage = () => {

    const searchInputRef = useRef(null);
    const searchButtonRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState('');

    const searchHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const query = formData.get('query') as string;
        setSearchQuery(query);
    };

    return (
        <>
            <HeadingBlock>
                <H1>Поиск</H1>
                <P>
                    Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                </P>
            </HeadingBlock>
            <Form type="search" className="mb-80" onSubmit={searchHandler}>
                <Input type="search" ref={searchInputRef} label={{hidden: true, text: 'Поиск'}}
                    name="query"
                    placeholder="Введите название"
                    icon="./images/icons/icon-search.svg"
                    key="search" />
                <Button type="submit" ref={searchButtonRef}>Искать</Button>
            </Form>
            <Suspense fallback={<div>Загрузка...</div>}>
                <SearchResults query={searchQuery} />
            </Suspense>


        </>
    );
};

export default SearchPage;