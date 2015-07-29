<ul data-cid="{cid}">
<!-- BEGIN categories -->
    <li data-cid="{categories.cid}" <!-- IF categories.disabled -->class="disabled"<!-- ENDIF categories.disabled -->>
        <div class="row">
            <div class="col-md-9">
                <div class="clearfix">
                    <div class="icon" style="color: {categories.color}; background-color: {categories.bgColor};<!-- IF categories.backgroundImage --> background-image: url('{categories.backgroundImage}');<!-- ENDIF categories.backgroundImage -->">
                        <i data-name="icon" value="{categories.icon}" class="fa {categories.icon}"></i>
                    </div>
                    <div class="information">
                        <h5 class="header">{categories.name}</h5>
                        <p class="description">{categories.descriptionParsed}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="clearfix pull-right text-right">
                    <div class="btn-group">
                        <button data-action="toggle" data-disabled="{categories.disabled}" class="btn btn-xs <!-- IF categories.disabled -->btn-primary<!-- ELSE -->btn-danger<!-- ENDIF categories.disabled -->">
                            <!-- IF categories.disabled -->Enable<!-- ELSE -->Disable<!-- ENDIF categories.disabled -->
                        </button>
                        <a href="./categories/{categories.cid}" class="btn btn-default btn-xs">Edit</a>
                    </div>
                </div>
            </div>
        </div>
    </li>
<!-- END categories -->
</ul>