import HeaderView from "./header"
import FooterView from './footer'
import React, {useEffect} from 'react';
import $ from 'jquery';
export default function BaseView({ children }) {
    useEffect(() => {
        
        $(document).ready(function () {
            $('.scroll_To_Top').click(function () {
                $('html, body').animate({ scrollTop: 0 }, 700);
                return false;
            });
        });

        /* ========================================== 
        scrollTop() >= 300
        Should be equal the the height of the header
        ========================================== */

        $(window).scroll(function () {
            if ($(window).scrollTop() >= 300 && $(window).width() > 767) {
                $('.master-header').addClass('fixed-header');
                $('.master-header > .row').addClass('visible-title');
                $('body').css({ 'padding-top': '90' });
            }
            else {
                $('.master-header').removeClass('fixed-header');
                $('.master-header > .row').removeClass('visible-title');
                $('body').css({ 'padding-top': '0' });
            }

            if ($(window).scrollTop() >= 500 && $(window).width() > 767) {
                $('.scroll_To_Top').addClass('active');
            } else {
                $('.scroll_To_Top').removeClass('active');
            }
        });

    });
    return (
        <>
            <HeaderView></HeaderView>
            {children}
            <FooterView></FooterView>
        </>
    )
}