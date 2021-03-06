test('should take old men older then 90', ()=> {
    const ages = [18,20,22,1,100,90,14];

    const oldAges = ages.filter(age => age > 90)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);

})

test('should take cheap courses (< 160)', ()=> {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 210},
        {title: 'React', price: 150}
    ];

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('React');
})


test('get only completes tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', idDone: false},
        {id: 2, title: 'Milk', idDone: true},
        {id: 3, title: 'Salt', idDone: false},
        {id: 4, title: 'Sugar', idDone: true},
    ]

    const completedTasks = tasks.filter(task => task.idDone)

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Milk');
    expect(completedTasks[1].title).toBe('Sugar');
})

export{}