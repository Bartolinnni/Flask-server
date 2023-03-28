from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .models import Posts
from . import db
views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("base.html", user=current_user)

@views.route('/user' , methods = ['GET', 'POST'])
@login_required
def userpage():
    if request.method == 'POST':
        note = request.form.get('f_note')
        notename = request.form.get('f_notename')
        new_note = Posts(data = note, creator_id = current_user.id, name=notename)
        db.session.add(new_note)
        db.session.commit()
    return render_template('blog.html', user=current_user)