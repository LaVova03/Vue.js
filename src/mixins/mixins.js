
import Edge from '../assets/edge.jpg';
import Xbox from '../assets/xbox.avif';
import OneDrive from '../assets/onedrive.jpg';
import OneNote from '../assets/onenote.jpg';

const mixins = {
    data() {
        return {
            microsoft: [
                {
                    name: 'Xbox Series X',
                    description: 'Самая быстрая и мощная консоль Xbox в истории.',
                    img: Xbox,
                    price: 1000,
                },
                {
                    name: 'Microsoft Edge',
                    description: 'Потрясающая производительность, больше конфиденциальности, продуктивности и дополнительных возможностей.',
                    img: Edge,
                    price: 1200,
                },
                {
                    name: 'Microsoft OneDrive',
                    description: 'Сохраняйте свои фотографии и файлы на OneDrive - они будут доступны с любого устройства и где угодно.',
                    img: OneDrive,
                    price: 1100,
                },
                {
                    name: 'OneNote',
                    description: 'Приведите свои заметки и дела в порядок.',
                    img: OneNote,
                    price: 1500,
                },
            ]
        };
    },
};

export default mixins;