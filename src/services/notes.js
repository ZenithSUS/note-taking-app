const notesDefaultData = () => {
    const notes = [
        {
            id: 1,
            title: 'Note 1',
            content: 'Content 1',
            finished: false,
        },
        {
            id: 2,
            title: 'Note 2',
            content: 'Content 2',
            finished: false,
        },
        {
            id: 3,
            title: 'Note 3',
            content: 'Content 3',
            finished: true,
        },
        {
            id: 4,
            title: 'Note 4',
            content: 'Content 4',
            finished: false,
        }
    ];
    return notes;
}

const getUsers = () => {
    let notes = [];
    const storage = localStorage.getItem('notes');
    if(storage) {
        notes = JSON.parse(storage);
    } else {
        notes = notesDefaultData();
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    return notes;
}

export { getUsers };