

## Pre-Requisites
  -  Minikube: https://minikube.sigs.k8s.io/docs/start/
  -  The Kubernetes command-line tool : https://kubernetes.io/docs/tasks/tools/

## Deploying to your local Kubernetes (MINIKUBE)
  ```shell
  helm install app-chart-release app-chart/
  ```
## Verifying deployment
  ```shell
  kubectl get pods
  ```

### Accesing the API from external
  Finding the URL  
  ```shell
    minikube service item-service --url
  ```