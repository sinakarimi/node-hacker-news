var _ = require('lodash');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

var article = {
	default: {
		"_id": new ObjectId(),
		"created_at": "2015-11-10T21:44:41.000Z",
    "title": null,
    "url": null,
    "author": "catnaroek",
    "points": null,
    "story_text": null,
    "comment_text": "The category I&#x27;m talking about has tables as objects, and chained foreign key traversals as morphims.<p>In SQL, this category is freely generated ( <a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Free_category\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Free_category</a> ) from a quiver ( <a href=\"https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Quiver_%28mathematics%29\" rel=\"nofollow\">https:&#x2F;&#x2F;en.wikipedia.org&#x2F;wiki&#x2F;Quiver_%28mathematics%29</a> ) whose nodes and edges are SQL tables and foreign keys, respectively.<p>In my proposal ( <a href=\"https:&#x2F;&#x2F;gist.github.com&#x2F;eduardoleon&#x2F;1e8ad9174ec5ae0386dd\" rel=\"nofollow\">https:&#x2F;&#x2F;gist.github.com&#x2F;eduardoleon&#x2F;1e8ad9174ec5ae0386dd</a> ), the category is still freely generated, but from something that has more structure than a quiver - some nodes may be designated as coproducts or products of other nodes.<p>In either case, the category can&#x27;t possibly have all coproducts and products, and that&#x27;s okay with me - a database can only have finitely many tables, after all. My beef with SQL is that it doesn&#x27;t allow this category to have <i>any</i> coproducts and products at all.",
    "num_comments": null,
    "story_id": 10527428,
    "story_title": "The category design pattern",
    "story_url": "http://www.haskellforall.com/2012/08/the-category-design-pattern.html",
    "parent_id": 10541683,
    "created_at_i": 1447191881,
    "_tags": [
      "comment",
      "author_catnaroek",
      "story_10527428"
    ],
    "objectID": "10542777",
    "_highlightResult": {
      "author": {
        "value": "catnaroek",
        "matchLevel": "none",
        "matchedWords": []
      },
      "comment_text": {
        "value": "The category I'm talking about has tables as objects, and chained foreign key traversals as morphims.<p>In SQL, this category is freely generated ( <a href=\"https://en.wikipedia.org/wiki/Free_category\" rel=\"nofollow\">https://en.wikipedia.org/wiki/Free_category</a> ) from a quiver ( <a href=\"https://en.wikipedia.org/wiki/Quiver_%28mathematics%29\" rel=\"nofollow\">https://en.wikipedia.org/wiki/Quiver_%28mathematics%29</a> ) whose <em>nodes</em> and edges are SQL tables and foreign keys, respectively.<p>In my proposal ( <a href=\"https://gist.github.com/eduardoleon/1e8ad9174ec5ae0386dd\" rel=\"nofollow\">https://gist.github.com/eduardoleon/1e8ad9174ec5ae0386dd</a> ), the category is still freely generated, but from something that has more structure than a quiver - some <em>nodes</em> may be designated as coproducts or products of other <em>nodes</em>.<p>In either case, the category can't possibly have all coproducts and products, and that's okay with me - a database can only have finitely many tables, after all. My beef with SQL is that it doesn't allow this category to have <i>any</i> coproducts and products at all.",
        "matchLevel": "full",
        "matchedWords": [
          "nodejs"
        ]
      },
      "story_title": {
        "value": "The category design pattern",
        "matchLevel": "none",
        "matchedWords": []
      },
      "story_url": {
        "value": "http://www.haskellforall.com/2012/08/the-category-design-pattern.html",
        "matchLevel": "none",
        "matchedWords": []
      }
    }
	}
}

module.exports = {
	article: article
}
