.PHONY: app_working app_not_working

app_not_working:
	@echo "App not working"
	docker build -t my-app:not_working -f Dockerfile_not_working .
	docker run --init -p 3000:3000 my-app:not_working

app_working:
	@echo "App working"
	docker build -t my-app:working -f Dockerfile_working .
	docker run --name my-app-working --network bridge -p 3000:3000 my-app:working
