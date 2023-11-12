export const DummyService = {
    getDoctorList() {
        return [
            {
                id: 1,
                code: 1001,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 2,
                code: 1002,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 3,
                code: 1003,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 4,
                code: 1004,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 5,
                code: 1005,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 6,
                code: 1006,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 7,
                code: 1007,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 8,
                code: 1008,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 9,
                code: 1009,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 10,
                code: 1010,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 11,
                code: 1011,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 12,
                code: 1012,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 13,
                code: 1013,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 14,
                code: 1014,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 15,
                code: 1015,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 16,
                code: 1016,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 17,
                code: 1017,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 18,
                code: 1018,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            }, {
                id: 19,
                code: 1019,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 20,
                code: 1020,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 21,
                code: 1021,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Mumbai',
                state: 'Uttar Pradesh',
                hospitalName: 17
            },
            {
                id: 22,
                code: 1022,
                name: 'Benton, John B Jr',
                speciality: '2015-09-13',
                city: 'Varanasi',
                state: 'Uttar Pradesh',
                hospitalName: 17
            }
        ];
    },

    getDoctors() {
        return Promise.resolve(this.getDoctorList().slice(0, 50));
    },

};
