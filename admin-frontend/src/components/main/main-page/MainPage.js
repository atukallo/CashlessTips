import React, {Component} from 'react';
import {Paper, Typography, Button, Divider, TextField} from '@material-ui/core';
import './MainPage.css';

export class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardNumber: null
        }
    }

    componentWillMount() {
        this.setState({
            cardNumber: this.loadData().cardNumber
        })
    }

    loadData() {
        // TODO
        return {
            cardNumber: null
        }
    }

    saveCard() {
        alert('actual connection to server is wip')
    }

    render() {
        return (
            <div className='main-page'>
                <div className='main-page-wrapper'>
                    <Paper>
                        <div className='main-page-paper'>
                            <Typography variant='headline'
                                        component='h3'
                                        style={{textAlign: 'center', fontSize: '25px'}}>
                                Добрый день!
                            </Typography>
                            <br/>
                            <Typography component='p' style={{fontSize: '18px'}}>
                                Здесь Вы можете получить или изменить текущий список контрольно-кассовых техник (ККТ),
                                а также ознакомиться с оценками и чаевыми, которые были
                                оставлены для каждого из официантов
                            </Typography>
                            <div className='main-page-paper-actions'>
                                <div className='main-page-button-wrapper'>
                                    <Button variant='raised'
                                            color='primary'>
                                        Официанты
                                    </Button>
                                    <Button variant='raised'
                                            color='primary'>
                                        ККТ
                                    </Button>
                                </div>
                            </div>
                            <Divider/>
                            <div className='main-page-card-block-wrapper'>
                                {this.state.cardNumber === null &&
                                <Typography component='p' style={{fontSize: '18px'}}>
                                    Вы еще не ввели номер карты, безналичные чаевые пока недоступны!
                                </Typography>}
                                <div className='main-page-card-input-wrapper'>
                                    <TextField className='main-page-card-number'
                                               value={this.state.cardNumber}
                                               onChange={event => this.setState({cardNumber: event.target.value})}
                                               label='Номер карты'/>
                                    <div className='main-page-save-card-button-wrapper'>
                                        <Button variant='outlined'
                                                onClick={() => this.saveCard()}>
                                            Сохранить
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}