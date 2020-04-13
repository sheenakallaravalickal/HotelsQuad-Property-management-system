// images
import image from 'images/team/img1.jpg'
import image2 from 'images/team/img2.jpg'
import image3 from 'images/team/img3.jpg'
const timeLines = [
    {
        title: 'Ida R. Robertson',
        text: 'White Pine Lane',
        subText: 'Bedford, VA 24523',
        time: '10.00 am',
        icon: 'I',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        background: '#ffd271',
        image: image,
        id: 1
    },
    {
        title: 'Michael K. Holcombe',
        text: '4035 Chardonnay',
        subText: 'Drive Orchards, WA 98662',
        time: '11.30 pm',
        icon: 'M',
        background: '#4a47a3',
        image: image2,
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        id: 3
    },
    {
        title: 'David G. Mederos',
        text: '3952 Maloy',
        subText: 'Court Russell, KS 67665',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.30 pm',
        icon: 'D',
        background: '#e9ea77',
        image: image3,
        id: 2
    },
    {
        title: 'Evelyn J. Markowski',
        text: '42 Warner Street',
        subText: 'N. Miami, FL 33137',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '1.00 pm',
        icon: 'E',
        background: '#0c9463',
        image: image,
        id: 4
    },
    {
        title: 'Bradley A. Wood',
        text: '3796 Oak Lane',
        subText: 'Maryville, MO 64468',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '3.00 pm',
        icon: 'B',
        background: '#fcc169',
        image: image2,
        id: 5
    },
    {
        title: 'Joseph J. Fogarty',
        text: 'Turnpike Drive',
        subText: 'Birmingham, AL 35203',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '2.00 pm',
        icon: 'J',
        background: '#f4efd3',
        image: image3,
        id: 7
    },
    {
        title: 'Marie W. Parmer',
        text: 'Adams Avenue',
        subText: 'Silver Spring, MD 20904',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.00 pm',
        icon: 'M',
        background: '#42dee1',
        image: image,
        id: 6
    },
    {
        title: 'Ida R. Robertson',
        text: 'White Pine Lane',
        subText: 'Bedford, VA 24523',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.00 am',
        icon: 'I',
        background: '#6decb9',
        image: image2,
        id: 8
    },
    {
        title: 'Michael K. Holcombe',
        text: '4035 Chardonnay',
        subText: 'Drive Orchards, WA 98662',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '11.30 pm',
        icon: 'M',
        background: '#eef5b2',
        image: image3,
        id: 9
    },
    {
        title: 'David G. Mederos',
        text: '3952 Maloy',
        subText: 'Court Russell, KS 67665',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.30 pm',
        icon: 'D',
        background: '#fa877f',
        image: image,
        id: 10
    },
    {
        title: 'Evelyn J. Markowski',
        text: '42 Warner Street',
        subText: 'N. Miami, FL 33137',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '1.00 pm',
        icon: 'E',
        background: '#dedef0',
        image: image2,
        id: 11
    },
    {
        title: 'Bradley A. Wood',
        text: '3796 Oak Lane',
        subText: 'Maryville, MO 64468',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '3.00 pm',
        icon: 'B',
        background: '#f39422',
        image: image3,
        id: 12
    },
    {
        title: 'Joseph J. Fogarty',
        text: 'Turnpike Drive',
        subText: 'Birmingham, AL 35203',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '2.00 pm',
        icon: 'J',
        background: '#0071F5',
        image: image,
        id: 13
    },
    {
        title: 'Marie W. Parmer',
        text: 'Adams Avenue',
        subText: 'Silver Spring, MD 20904', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?', time: '10.00 pm', icon: 'M', background: '#0071F5', image: image, id: 14
    },
    {
        title: 'Marie W. Parmer',
        text: 'Adams Avenue',
        subText: 'Silver Spring, MD 20904',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.00 pm',
        icon: 'M',
        background: '#0071F5',
        image: image2,
        id: 15
    },
    {
        title: 'Ida R. Robertson',
        text: 'White Pine Lane',
        subText: 'Bedford, VA 24523',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.00 am',
        icon: 'I',
        background: '#0071F5',
        image: image3,
        id: 16
    },
    {
        title: 'Michael K. Holcombe',
        text: '4035 Chardonnay',
        subText: 'Drive Orchards, WA 98662',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '11.30 pm',
        icon: 'M',
        background: '#0071F5',
        image: image,
        id: 17
    },
    {
        title: 'David G. Mederos',
        text: '3952 Maloy',
        subText: 'Court Russell, KS 67665',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.30 pm',
        icon: 'D',
        background: '#0071F5',
        image: image2,
        id: 18
    },
    {
        title: 'Evelyn J. Markowski',
        text: '42 Warner Street',
        subText: 'N. Miami, FL 33137',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '1.00 pm',
        icon: 'E',
        background: '#0071F5',
        image: image3,
        id: 19
    },
    {
        title: 'Bradley A. Wood',
        text: '3796 Oak Lane',
        subText: 'Maryville, MO 64468',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '3.00 pm',
        icon: 'B',
        background: '#0071F5',
        image: image2,
        id: 20
    },
    {
        title: 'Joseph J. Fogarty',
        text: 'Turnpike Drive',
        subText: 'Birmingham, AL 35203',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '2.00 pm',
        icon: 'J',
        background: '#0071F5',
        image: image,
        id: 21
    },
    {
        title: 'Marie W. Parmer',
        text: 'Adams Avenue',
        subText: 'Silver Spring, MD 20904',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non, qui hic animi recusandae natus, porro repellat assumenda, vitae cupiditate autem officia tempora aliquid aspernatur! Eligendi sapiente praesentium consectetur at?',
        time: '10.00 pm',
        icon: 'M',
        background: '#0071F5',
        image: image3,
        id: 22
    },
]
export default timeLines