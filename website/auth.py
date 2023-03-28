from flask import Blueprint, render_template, request,flash, redirect, url_for
from .models import User 
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        
        login = request.form.get('f_login')
        password1 = request.form.get('f_haslo1')

        user = User.query.filter_by(login=login).first()

        if user:
            if check_password_hash(user.password, password1):
                flash('Logged in succefully!', category='succes')
                login_user(user, remember=True)
                return redirect(url_for('views.userpage'))

            else:
                flash('Incorret password!',category='succes')
        else:
            flash('User does not exist.', category='succes')        
        
        
    return render_template("login.html", user = current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user( )
    return redirect(url_for('auth.login'))

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        data = request.form
        email = request.form.get('f_email')
        login = request.form.get('f_login')
        password1 = request.form.get('f_haslo1')
        password2 = request.form.get('f_haslo2')
        print(data)
        new_user = User(email = email, login =login, password=generate_password_hash(password1, method='sha256'))
        
        db.session.add(new_user)
        db.session.commit()

        flash('Konto zostało założone', category = 'success')

        login_user(new_user, remember=True)

        return redirect(url_for('views.home'))
    
    return render_template("regist.html", user = current_user)